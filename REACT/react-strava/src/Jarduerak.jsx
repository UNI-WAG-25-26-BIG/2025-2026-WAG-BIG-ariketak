import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CONFIG from "./config/config";
import { mock1 } from "./assets/klubak";
import "./Jarduerak.css";

export default function Jarduerak() {
  // kluba ID lortu URL-etik
  const { id } = useParams();
  const navigate = useNavigate();
  const numericId = useMemo(() => Number(id), [id]);

  const [kluba, setKluba] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  //useEffect kluba datuak kargatzeko eta ordenean jartzeko
  useEffect(() => {
    let alive = true;

    async function load() {
      setLoading(true);
      setError(null);
      try {
        let k = null;

        if (CONFIG.use_server) {
          // API-a deitu id-rekin
          const resp = await fetch(`${CONFIG.server_url}/${numericId}`);
          if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
          k = await resp.json();
        } else {
          // Ez badago server-rik, mock-etik bilatu
          k = (mock1?.klubak || []).find(c => Number(c.id) === numericId) || null;
          if (!k) throw new Error("Kluba ez da aurkitu (mock)");
        }

        //datuak ordenatu jarduerak mugitze-denbora handienetik txikienera
        const ordenado = {
          ...k,
          jarduerak: [...(k.jarduerak || [])].sort(
            (a, b) => b.moving_time - a.moving_time
          ),
        };

        if (alive) setKluba(ordenado);
      } catch (e) {
        if (alive) setError(e?.message || "Errore ezezaguna");
        console.error("Error ::", e);
      } finally {
        if (alive) setLoading(false);
      }
    }

    if (!Number.isFinite(numericId)) {
      setError("ID baliogabea");
      setLoading(false);
      return;
    }

    load();
    return () => {
      alive = false;
    };
  }, [numericId]);

  // Atzera bueltatzeko funtzioa
  const goBack = () => navigate(-1);

  return (
    <div className="page">
      <header>
        <h1>{kluba?.name ?? "Jarduerak"}</h1>
      </header>

      {loading && <p>Kargatzen...</p>}
      {error && <p className="error">Errorea: {error}</p>}

      {!loading && !error && !kluba && <p>Ez da kluba aurkitu.</p>}

      {!loading && !error && kluba && (
        <>
          {kluba.description && <p>{kluba.description}</p>}

          <table>
            <thead>
              <tr>
                <th>Atleta</th>
                <th>Izena</th>
                <th>Mota</th>
                <th>mt.</th>
                <th>sg.</th>
              </tr>
            </thead>
            <tbody>
              {(kluba.jarduerak || []).map((a, i) => (
                <tr key={`${a.atleta_id}-${i}`}>
                  <td>{a.atleta_id}</td>
                  <td>{a.name}</td>
                  <td>{a.type}</td>
                  <td>{a.distance}</td>
                  <td>{a.moving_time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      <button onClick={goBack}>Bueltatu</button>
    </div>
  );
}
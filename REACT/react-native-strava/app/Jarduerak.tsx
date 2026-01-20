// Jarduerak.tsx (React Native + TSX, FlatList)
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { mock1 } from "../assets/klubak";
import CONFIG from "../config/config";

type Jarduera = {
  atleta_id: number | string;
  name: string;
  type: string;
  distance: number;
  moving_time: number;
};

type Kluba = {
  id: number | string;
  name: string;
  description?: string | null;
  jarduerak?: Jarduera[];
};

type Row = {
  key: string;
  a: Jarduera;
};

export default function Jarduerak() {
  const { id } = useLocalSearchParams<{ id?: string | string[] }>();
  const idStr = Array.isArray(id) ? id[0] : id;
  const numericId = useMemo(() => Number(idStr), [idStr]);


  const [kluba, setKluba] = useState<Kluba | null>(null);
  const [rows, setRows] = useState<Row[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let alive = true;

    async function load() {
      setLoading(true);
      setError(null);

      try {
        let k: any = null;

        if (CONFIG.use_server) {
          const resp = await fetch(`${CONFIG.server_url}/${numericId}`);
          if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
          k = await resp.json();
        } else {
          k =
            (mock1?.klubak || []).find((c: any) => Number(c.id) === numericId) ||
            null;
          if (!k) throw new Error("Kluba ez da aurkitu (mock)");
        }

        const ordenado: Kluba = {
          ...k,
          jarduerak: [...(k.jarduerak || [])].sort(
            (a: Jarduera, b: Jarduera) => b.moving_time - a.moving_time
          ),
        };

        const nextRows: Row[] = (ordenado.jarduerak || []).map((a, i) => ({
          key: `${a.atleta_id}-${i}`,
          a,
        }));

        if (alive) {
          setKluba(ordenado);
          setRows(nextRows);
        }
      } catch (e: any) {
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

  const goBack = () => router.back();

  const renderHeader = () => (
    <View style={styles.listHeader}>
      <View style={styles.headerTop}>
        <Text style={styles.h1}>{kluba?.name ?? "Jarduerak"}</Text>
      </View>

      {loading ? (
        <View style={styles.loadingRow}>
          <ActivityIndicator />
          <Text style={styles.loadingText}>Kargatzen...</Text>
        </View>
      ) : null}

      {error ? <Text style={styles.error}>Errorea: {error}</Text> : null}

      {!loading && !error && !kluba ? (
        <Text>Ez da kluba aurkitu.</Text>
      ) : null}

      {!loading && !error && kluba?.description ? (
        <Text style={styles.paragraph}>{kluba.description}</Text>
      ) : null}

      {/* "Table header" row */}
      {!loading && !error && kluba ? (
        <View style={[styles.row, styles.rowHeader]}>
          <Text style={[styles.cell, styles.headerCell]}>Atleta</Text>
          <Text style={[styles.cell, styles.headerCell]}>Izena</Text>
          <Text style={[styles.cell, styles.headerCell]}>Mota</Text>
          <Text style={[styles.cellNarrow, styles.headerCell]}>mt.</Text>
          <Text style={[styles.cellNarrow, styles.headerCell]}>sg.</Text>
        </View>
      ) : null}
    </View>
  );

  const renderItem = ({ item }: { item: Row }) => {
    const a = item.a;
    return (
      <View style={styles.row}>
        <Text style={styles.cell}>{String(a.atleta_id)}</Text>
        <Text style={styles.cell}>{a.name}</Text>
        <Text style={styles.cell}>{a.type}</Text>
        <Text style={styles.cellNarrow}>{String(a.distance)}</Text>
        <Text style={styles.cellNarrow}>{String(a.moving_time)}</Text>
      </View>
    );
  };

  return (
    <View style={styles.page}>
      <FlatList
        data={rows}
        keyExtractor={(item) => item.key}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
        ListEmptyComponent={
          !loading && !error ? (
            <Text style={styles.empty}>Ez dago jarduerarik.</Text>
          ) : null
        }
        contentContainerStyle={styles.listContainer}
        ItemSeparatorComponent={() => <View style={styles.sep} />}
      />

      <Pressable style={styles.button} onPress={goBack}>
        <Text style={styles.buttonText}>Bueltatu</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 16,
  },

  listContainer: {
    paddingBottom: 16,
    borderWidth: 1,
    borderColor: "#ddd",
  },

  listHeader: {
    paddingBottom: 8,
  },
  headerTop: {
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 8,
    paddingHorizontal: 0,
  },
  h1: {
    fontSize: 22,
    fontWeight: "700",
  },

  loadingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
  },
  loadingText: {
    fontSize: 14,
  },

  error: {
    color: "red",
    marginBottom: 10,
  },

  paragraph: {
    marginBottom: 10,
    fontSize: 14,
  },

  empty: {
    padding: 12,
  },

  row: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    backgroundColor: "#fff",
  },
  rowHeader: {
    backgroundColor: "#f4f4f4",
    borderTopWidth: 0,
  },

  cell: {
    flex: 1,
    padding: 8,
  },
  cellNarrow: {
    width: 70,
    padding: 8,
  },
  headerCell: {
    fontWeight: "700",
  },

  sep: {
    height: 0,
  },

  button: {
    marginTop: 12,
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: "#eee",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontWeight: "600",
  },
});

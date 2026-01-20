// Emaitzak.tsx
import React from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

import { router } from "expo-router";
import { IMAGE_MAP } from "../assets/assets-map";
import type { Kluba } from "./index";

type Props = {
  emaitza?: Kluba[];
  onDetailsPress?: (item: Kluba) => void;
};

export default function Emaitzak({ emaitza = [] }: Props) {
  const { width } = useWindowDimensions();
  const isSmall = width < 720;

  const renderItem = ({ item }: { item: Kluba }) => {
    const clubType = item.club_type ? item.club_type.toUpperCase() : null;
    const memberCount = item.member_count ?? 0;
    const imageSource =
      item.cover_photo_small && IMAGE_MAP[item.cover_photo_small]
      ? IMAGE_MAP[item.cover_photo_small]
      : require("../assets/img/generikoa.jpg");

    return (
      <View style={[styles.card, isSmall && styles.cardSmall]}>
        <View style={[styles.info, isSmall && styles.infoSmall]}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>{item.name} </Text>

            {clubType ? (
              <View style={styles.label}>
                <Text style={styles.labelText}>{clubType}</Text>
              </View>
            ) : null}

            {item.privatea ? <Text style={styles.lock}>🔒</Text> : null}
          </View>

          {item.description ? (
            <Text style={styles.paragraph}>{item.description}</Text>
          ) : null}

          {item.sport_type ? (
            <Text style={styles.paragraph}>
              Kirol mota: <Text style={styles.em}>{item.sport_type}</Text>
            </Text>
          ) : null}

          <Text style={styles.paragraph}>
            Partehartzaileak:{" "}
            <Text style={styles.count}>{String(memberCount)}</Text>
          </Text>

          <View style={styles.bottom}>
            <Pressable
              style={styles.detailsButton}
              onPress={() =>
                router.push({ pathname: "/Jarduerak", params: { id: String(item.id) } })
              }
            >
              <Text style={styles.detailsButtonText}>🛈 Detaileak ikusi</Text>
            </Pressable>
          </View>
        </View>

        {item.cover_photo_small ? (
          <Image
            style={[styles.cover, isSmall && styles.coverSmall]}
            source={imageSource}
            accessibilityLabel="kluba"
          />
        ) : null}
      </View>
    );
  };

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={emaitza}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },

  // Card
  card: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    padding: 16,
    // shadow (iOS)
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    // elevation (Android)
    elevation: 2,
    backgroundColor: "#fff",

    // "grid 12 cols" web -> row layout RN
    flexDirection: "row",
    gap: 12,
    alignItems: "flex-start",
  },
  cardSmall: {
    flexDirection: "column",
  },

  // Left column
  info: {
    flex: 1,
  },
  infoSmall: {
    width: "100%",
  },

  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 6,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
  },

  label: {
    backgroundColor: "#28a745",
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  labelText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "700",
  },

  lock: {
    fontSize: 16,
  },

  paragraph: {
    fontSize: 14,
    marginBottom: 6,
  },
  em: {
    fontStyle: "italic",
  },

  count: {
    backgroundColor: "orange",
    color: "#fff",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 5,
    fontWeight: "800",
  },

  bottom: {
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  detailsButton: {
    backgroundColor: "#17a2b8",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  detailsButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "700",
  },

  // Right image
  cover: {
    width: 140,
    height: 180,
    borderRadius: 8,
    resizeMode: "cover",
  },
  coverSmall: {
    width: "100%",
    height: 200,
  },
});

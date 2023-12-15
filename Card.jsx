import { View, Text, Image } from "react-native";
import styles from "./card.style";

export function Card({ description, title, subtitle, style, width, height }) {
  return (
    <View style={[styles.card, {width:width}, {height:height}]}>
      <View style={styles.cardContainer}>
        <Text style={[styles.title]}>{title}</Text>
        <Text style={[styles.subtitle]}>{subtitle}</Text>
        <Text style={[styles.description]}>{description}</Text>
      </View>
    </View>
  )
}

export default Card
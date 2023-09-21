import { StatusBar } from 'expo-status-bar';
import {color} from "nativewind/dist/tailwind/native/color";
import { View, TextInput, Image, ScrollView, Text } from 'react-native';

export default function App() {
  const data = mockData;
  return (
    <View className="flex-1 bg-white items-center justify-center p-5">

      <Image source={require('./assets/costcure-logo.png')} className="w-12 h-12 mb-5" />

      <TextInput
        className="h-10 w-full border-2 border-purple-600 mt-5 px-2 rounded"
        placeholder="Search for disease..."
      />

      <TextInput
        className="h-10 w-full border-2 border-purple-600 mt-5 px-2 rounded"
        placeholder="Your city name/Zipcode..."
      />

      {/* Display the returned data in the form of cards */}
      <ScrollView className="w-full mt-5" horizontal={true}>
        {data.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </ScrollView>

    </View>
  );
}

function Card({ data }: { data: { title: string; description: string } }) {
  return (
    <View className="w-48 h-36 bg-gray-200 rounded-lg p-5 mr-4 shadow-lg">
      <Text className="text-lg font-bold">{data.title}</Text>
      <Text className="mt-2 text-base">{data.description}</Text>
    </View>
  );
}

const mockData = [
  { title: "item 1", description: "description 1" },
  { title: "item 2", description: "description 2" },
  { title: "item 3", description: "description 3" },
  { title: "item 4", description: "description 4" }
];


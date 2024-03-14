import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';
import { useFetchArticle } from '../hooks/useFetchArticle';

export default function Page() {
  const { articleId } = useLocalSearchParams();

  const { data } = useFetchArticle(articleId as string);

  console.log('data', data)

  const publishDate = new Date(data?.publishedAt ?? '');

  return (
    <View className="bg-zinc-950 flex flex-1">
      <View className="flex flex-col gap-2">
        <Text className="text-2xl font-semibold text-zinc-200">
          {data?.title}
        </Text>
        <Text className="text-xs text-zinc-500">
          Written by {data?.author}, {publishDate.toLocaleDateString()}
        </Text>
        <Text className="text-base text-zinc-300">{data?.body}</Text>
      </View>
    </View>
  );
}

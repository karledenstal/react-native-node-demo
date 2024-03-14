import { View, Text } from 'react-native';
import { useFetchArticles } from '../hooks/useFetchArticles';
import { Link } from 'expo-router';

export default function Page() {
  const { data } = useFetchArticles();

  return (
    <View className="bg-zinc-950 flex flex-1 flex-col gap-2">
      {data &&
        data.map(({ id, title, body }) => (
          <View
            key={id}
            className="rounded-md border border-zinc-800 p-4 flex flex-col gap-2"
          >
            <Link
              href={{ pathname: '/[articleId]', params: { articleId: id } }}
            >
              <Text className="text-2xl font-semibold text-zinc-200">
                {title}
              </Text>
            </Link>
            <Text className="text-base text-zinc-300">{body}</Text>
          </View>
        ))}
    </View>
  );
}

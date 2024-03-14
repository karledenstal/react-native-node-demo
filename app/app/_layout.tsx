import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';

const client = new QueryClient();

export default function Layout() {
  return (
    <QueryClientProvider client={client}>
      <Stack />
    </QueryClientProvider>
  );
}

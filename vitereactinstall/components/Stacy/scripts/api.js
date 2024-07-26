const API_BASE_URL = 'https://becodecogip2.rbarkersw.com'; // Assurez-vous que l'URL inclut le protocole (http ou https)
const API_KEY = 'qh1k0kde6epogdou8b8bpj28jn';

async function fetchWithApiKey(url) {
  try {
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      }
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${url}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    throw error;
  }
}

export async function fetchClients() {
  return fetchWithApiKey(`${API_BASE_URL}/clients`);
}

export async function fetchClientDetail(clientId) {
  return fetchWithApiKey(`${API_BASE_URL}/clients/${clientId}`);
}

export async function getCollection<T>(collection: string): Promise<T> {
    // Placeholder - la implementación real usa axios con la URL de la API
    const response = await fetch(`/api/${collection}`);
    return response.json();
}

const baseUrl = 'http://numbersapi.com/random/'

export type Category = 'date' | 'math';
type FetchRandomFactBy = (category: string) => Promise<string>;

export const fetchRandomFactBy: FetchRandomFactBy = async (type: string) => {
    const fact = await fetch(baseUrl + type).
        then(response => response.text())
        .then(data => data);

    return fact;
}


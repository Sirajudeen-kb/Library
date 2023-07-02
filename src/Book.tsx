// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Book {
    id: string;
    volumeInfo: {
      title: string;
      imageLinks?: {
        thumbnail: string;
      };
      authors?: string[];
      categories?: string[];
      publishedDate?: string;
    };
  }

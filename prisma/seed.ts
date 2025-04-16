// prisma/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.movie.createMany({
  data: [
      {
        title: "InterStellar",
        description: "An aspiring actress and a jazz musician fall in love while struggling to balance their careers and dreams in Los Angeles.",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        thumbnailUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        genre: "Music",
        duration: "35"
      },
      {
        title: "Big Buck Bunny",
        description: "A thief who enters the dreams of others is tasked with planting an idea into a target's mind.",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        thumbnailUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        genre: "Sci-Fi",
        duration: "42"
      },
      {
        title: "Elephant Dream",
        description: "The aging patriarch of a crime dynasty transfers control to his reluctant son.",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        thumbnailUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        genre: "Crime",
        duration: "55"
      },
      {
        title: "For Bigger Blazes",
        description: "A man is wrongly imprisoned and finds hope and friendship in jail.",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        thumbnailUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        genre: "Drama",
        duration: "50"
      },
      {
        title: "For Bigger Escape",
        description: "Batman battles the Joker to save Gotham City.",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        thumbnailUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        genre: "Action",
        duration: "48"
      },
      {
        title: "For Bigger Fun",
        description: "The life of a slow-witted but kind-hearted man who witnesses and influences several historical events.",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        thumbnailUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        genre: "Thriller",
        duration: "44"
      },
      {
        title: "For Bigger Joyrides",
        description: "A team of explorers travels through a wormhole to save humanity.",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        thumbnailUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        genre: "Sci-Fi",
        duration: "59"
      },
      {
        title: "For Bigger Meltdowns",
        description: "A team of explorers travels through a wormhole to save humanity.",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        thumbnailUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        genre: "Action",
        duration: "59"
      },
      {
        title: "Sintel",
        description: "A team of explorers travels through a wormhole to save humanity.",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        thumbnailUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        genre: "Action",
        duration: "59"
      },
      {
        title: "Subaru Outback On Street And Dirt",
        description: "A team of explorers travels through a wormhole to save humanity.",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
        thumbnailUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        genre: "Thriller",
        duration: "59"
      },
      
    ], // Optional: prevents duplicate entries if there's a unique constraint
  });

  console.log("movies added!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

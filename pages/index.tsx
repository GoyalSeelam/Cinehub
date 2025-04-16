import { getSession } from "next-auth/react";
import { NextPageContext } from "next";
import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billboard";
import MovieList from "@/components/MovieList";
import useMovieList from "@/hooks/useMovieList";
import useFavourites from "@/hooks/useFavourites";
import InfoModal from "@/components/InfoModal";
import useInfoModal from "@/hooks/useInfoModal";

// Define the Movie type
interface Movie {
    id: string;
    title: string;
    genre: string;
    // Add other movie properties as needed
}

// Protect the route - redirect if no session
export async function getServerSideProps(context: NextPageContext) {
    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                destination: '/auth',
                permanent: false,
            },
        };
    }

    return {
        props: {},
    };
}

export default function Home() {
    const { data: movies = [] } = useMovieList();
    const { data: favourites = [] } = useFavourites();
    const { isOpen, closeModal } = useInfoModal();

    // Categorize movies by genre
    const series = movies.filter((movie: Movie) => movie.genre?.toLowerCase() === 'series');
    const drama = movies.filter((movie: Movie) => movie.genre?.toLowerCase() === 'drama');
    const action = movies.filter((movie: Movie) => movie.genre?.toLowerCase() === 'action');
    const comedy = movies.filter((movie: Movie) => movie.genre?.toLowerCase() === 'comedy');

    return (
        <>
            <InfoModal visible={isOpen} onClose={closeModal} />
            <Navbar />
            <Billboard />
            <div className="pb-40">
                <MovieList title="Trending Now" data={movies} />
                {series.length > 0 && <MovieList title="Series" data={series} />}
                {drama.length > 0 && <MovieList title="Drama" data={drama} />}
                {action.length > 0 && <MovieList title="Action" data={action} />}
                {comedy.length > 0 && <MovieList title="Comedy" data={comedy} />}
                {favourites.length > 0 && <MovieList title="My List" data={favourites} />}
            </div>
        </>
    );
}

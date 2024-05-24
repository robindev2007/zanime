"use client";
import AnimeCard from "@/components/common/AnimeCard";
import React from "react";

export interface Anime {
  id: string;
  title: string;
  image: string;
  url: string;
  genres: string[];
}

export interface animeRes {
  currentPage: number;
  hasNextPage: boolean;
  results: Anime[];
}

const TopAiring = async () => {
  const animes: Anime[] | undefined = [];
  const animeDataRes = await fetch(
    "https://animetize-api.vercel.app/top-airing"
  );

  const animes1 = (await animeDataRes.json()) as animeRes;

  animes.push(...animes1.results);

  const res2 = await fetch(
    "https://animetize-api.vercel.app/top-airing?page=2"
  );

  const animes2 = (await res2.json()) as animeRes;

  animes.push(...animes2.results);

  return (
    <div>
      <h2>Top Airings</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 lg:grid-cols-6">
        {animes &&
          animes.map((anime, i) => (
            <AnimeCard anime={anime} index={i} key={anime.id} />
          ))}
      </div>
    </div>
  );
};

export default TopAiring;

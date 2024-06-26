import { TAnimeInfo } from "@/types/anime/anime.types";
import React from "react";
import RelatedAnimeCard from "./RelatedAnimeCard";
import H2 from "@/components/ui/h2";

const RelatedAnimes = ({ animes }: { animes?: TAnimeInfo["relation"] }) => {
  const onlyAnimes = animes?.filter((anime) => anime.type !== "MANGA");

  return (
    <div className="shrink-0 space-y-2">
      <H2 className="py-0 leading-5">Related</H2>
      <div className="shrink-0 gap-2 flex-col max-h-[90vh] px-1 overflow-x-hidden flex">
        {onlyAnimes && onlyAnimes.length > 0 ? (
          onlyAnimes.map((anime) => (
            <RelatedAnimeCard key={anime.id} anime={anime} />
          ))
        ) : (
          <span>No anime found</span>
        )}
      </div>
    </div>
  );
};

export default RelatedAnimes;

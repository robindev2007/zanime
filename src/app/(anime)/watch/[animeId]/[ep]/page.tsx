import React from "react";
import {
  getAnimeInfo,
  getEpisodeInfo,
  getStremLinks,
  getStrems,
} from "@/app/actions/anime";
import Watch from "./components/Watch";
import Image from "next/image";
import { AnimeInfoT, animeStremsT } from "@/types/anime.types";
import { cookies } from "next/headers";

const AnimeEpPage = async ({
  params,
}: {
  params: { ep: string; animeId: string };
}) => {
  const epId =
    params.ep === "ep-0"
      ? params.animeId
      : params.animeId + "-episode" + params.ep.split("ep")[1];

  const allData = await getEpisodeInfo({
    animeId: params.animeId,
    ep: params.ep.split("ep-")[1],
    epId: epId,
  });

  const animeInfo = allData.info;
  const strems = allData.streams;

  return (
    <div className="grid gap-3">
      <Watch
        animeInfo={allData.info}
        defaultVideourls={strems}
        currentEp={Number(params.ep.split("ep-")[1])}
      />
    </div>
  );
};

export default AnimeEpPage;
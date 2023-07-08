import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import YouTube from "react-youtube-embed";
import RelatedAnime from "./RelatedAnime";
import Loading from "./Loading";
import AnimeList from "./AnimeList";
import { CSSTransition } from "react-transition-group";
import jwtDecode from "jwt-decode";

export default function AnimeDetails(props) {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const id = query.get("id");
  const [animeDetail, setAnimeDetail] = useState(null);
  const [relatedAnimeList, setRelatedAnimeList] = useState(null);
  const [error, setError] = useState(null);
  const [isTimeOut, setIsTimeOut] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null); // add state variable for timeout ID
  const [showAnimeList, setShowAnimeList] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isFave, setIsFave] = useState(false);

  useEffect(() => {
    console.log(isFave);
  }, [isFave]);

  const handleShowAnimeList = () => {
    setShowAnimeList(!showAnimeList);
    setIsButtonClicked(true);
  };

  const handleIsFave = async () => {
    const token = localStorage.getItem("token");

    const user = jwtDecode(token);

    if (!isFave) {
      try {
        const res = await axios.post(
          `http://ec2-15-185-195-60.me-south-1.compute.amazonaws.com:4000/list/${user.user.favListId}/addItem`,
          animeDetail,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(res);
        setIsFave(true);
      } catch (error) {
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
        ) {
          console.log(error.response.data.message);
        }
      }
    } else {
      try {
        const res = await axios.post(
          `http://ec2-15-185-195-60.me-south-1.compute.amazonaws.com:4000/list/${user.user.favListId}/removeItem`,
          {
            mal_id: animeDetail.mal_id,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(res);
        setIsFave(false);
      } catch (error) {
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
        ) {
          console.log(error.response.data.message);
        }
      }
    }
  };

  const checkIsFave = async () => {
    const token = localStorage.getItem("token");

    const user = jwtDecode(token);

    console.log(user);

    const res = await axios.get(
      `http://ec2-15-185-195-60.me-south-1.compute.amazonaws.com:4000/list/${user.user.favListId}/items`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(res.data.items);

    const favList = res.data.items;
    const isFave = favList.some((item) => item.mal_id === parseInt(id));
    console.log(isFave);
    return isFave;
  };

  useEffect(() => {
    const updateIsFave = async () => {
      const isFave = await checkIsFave();
      setIsFave(isFave);
    };

    updateIsFave();

    axios
      .get(`https://api.jikan.moe/v4/anime/${id}/full`)
      .then((response) => {
        // console.log(response.data.data);
        setAnimeDetail(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(`https://api.jikan.moe/v4/anime/${id}/recommendations`)
      .then((response) => {
        // console.log(response.data.data);
        setRelatedAnimeList(response.data.data);
      })
      .catch((error) => {
        setError(error);
        console.log(error);
      });

    const timerId = setTimeout(() => {
      setIsTimeOut(true);
    }, 1000);
    setTimeoutId(timerId);
  }, [id]);

  if (!animeDetail) {
    return <Loading />;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (relatedAnimeList === null) {
    return <Loading />;
  } else if (relatedAnimeList.length === 0 && !isTimeOut) {
    return <Loading />;
  } else if (relatedAnimeList.length > 0) {
    clearTimeout(timeoutId);
  }
  const animeTrailer =
    animeDetail.trailer.youtube_id !== null ? (
      <YouTube id={animeDetail.trailer.youtube_id} />
    ) : (
      <Card.Img
        style={{ objectFit: "cover", height: "30rem" }}
        variant="top"
        src={animeDetail.images.jpg.large_image_url}
      />
    );

  const alternativeTitle =
    animeDetail.title_english !== null &&
    animeDetail.title_english !== animeDetail.title ? (
      <Card.Text>Alternative Title: {animeDetail.title_english}</Card.Text>
    ) : null;

  return (
    <>
      <div className="anime-detail-section">
        <div>
          <Card
            style={{
              width: "18rem",
              backgroundColor: "#3c4048",
              border: "1px solid white",
            }}
          >
            <Card.Img variant="top" src={animeDetail.images.jpg.image_url} />
            <Card.Body>
              <Card.Title>{animeDetail.title}</Card.Title>
              {alternativeTitle}
              <Card.Text>Type: {animeDetail.type}</Card.Text>
              <Card.Text>Score: {animeDetail.score}</Card.Text>
              <Card.Text>Status: {animeDetail.status}</Card.Text>
              <Card.Text>Episodes: {animeDetail.episodes}</Card.Text>
              <Card.Text>
                Genres:
                {animeDetail.genres.map((genre) => genre.name).join(", ")}
              </Card.Text>
              <div className="anime-details-buttons">
                <Button
                  variant="dark"
                  style={{ width: "30%" }}
                  onClick={handleIsFave}
                >
                  <i
                    className={`${
                      isFave ? "fa-solid fa-spin" : "fa-regular fa-beat"
                    } fa-star`}
                  ></i>
                </Button>
                <Button
                  variant="dark"
                  style={{ width: "30%" }}
                  onClick={handleShowAnimeList}
                  className={isButtonClicked ? "clicked" : ""}
                >
                  <i
                    class="fa-solid fa-plus fa-bounce"
                    style={{ color: "#ffffff" }}
                  ></i>
                </Button>
                <CSSTransition
                  in={showAnimeList}
                  timeout={300}
                  classNames="animelist"
                  unmountOnExit
                >
                  <AnimeList />
                </CSSTransition>
              </div>
            </Card.Body>
          </Card>
        </div>

        <div>
          <Card
            style={{
              width: "57rem",
              backgroundColor: "#3c4048",
              border: "1px solid white",
            }}
          >
            {animeTrailer}
            <Card.Body>
              <Card.Title>{animeDetail.title}</Card.Title>
              <Card.Text>Synopsis: {animeDetail.synopsis}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      {!isTimeOut ? (
        <div>
          <RelatedAnime
            animeList={relatedAnimeList}
            carouselTitle={"Recommendations"}
          />
        </div>
      ) : null}
    </>
  );
}

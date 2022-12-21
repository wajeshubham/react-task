import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import SeriesSummary from "./components/SeriesSummary";
import ReviewItem from "./components/ReviewItem";
import ReviewStats from "./components/ReviewStats";
import Tab from "./components/Tab";
import WatchedBy from "./components/WatchedBy";
import { api } from "./api";
import { ReviewInterface, SeriesInterface, TabEnum } from "./interfaces";
import Layout from "./layout";
import { getImagePath } from "./utils";
import CastListing from "./components/CastListing";

const reviews: ReviewInterface = {
  average: 4,
  totalCount: 1624,
  counts: [
    { rating: 5, count: 1019 },
    { rating: 4, count: 162 },
    { rating: 3, count: 97 },
    { rating: 2, count: 199 },
    { rating: 1, count: 147 },
  ],
  featured: [
    {
      id: 1,
      rating: 5,
      content: `
      Had read the sprawling world building novel by Vikram Chandra nearly a year back; so was waiting with bated breath for the TV adaptation. Also met the author at a literary event; and asked him about the same.      `,
      author: "Salman Khan",
      avatarSrc:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    },
    {
      id: 1,
      rating: 5,
      content: `
      Now having watched all the 8 episodes; my verdict is half liked it and half hated the whole thing. Anurag Kashyap and Vikramaditya Motwane have conformed to the Netflix staple of sex, violence and cliffhangers but sincerely crassness and too much sex spoil the broth somewhat.      `,
      author: "Manoj Bajpayee",
      avatarSrc:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    },
    {
      id: 1,
      rating: 4,
      content: `
      Had read the sprawling world building novel by Vikram Chandra nearly a year back; so was waiting with bated breath for the TV adaptation. Also met the author at a literary event; and asked him about the same.      `,
      author: "Salman Khan",
      avatarSrc:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    },
  ],
};

const App = () => {
  const [activeTab, setActiveTab] = useState<TabEnum>(TabEnum.CAST);
  const [series, setSeries] = useState<SeriesInterface | null>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const fetchSeries = async () => {
    try {
      setLoading(true);
      const response = await api.get("/data-sg");
      setSeries(response.data);
    } catch (error) {
      console.log(error);
      setError("Error while fetching the series!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSeries();
  }, []);

  if (loading)
    return (
      <Layout>
        <Loader />
      </Layout>
    );

  if (!series)
    return (
      <Layout>
        <div className="py-12 w-full flex justify-center items-center">
          <h1 className="text-white">Series not found :-(</h1>
        </div>
      </Layout>
    );

  return (
    <Layout>
      {/* We can handle api errors better if we use state management */}
      {/* I would consider handling this error in the interceptor */}
      {error ? (
        <div className="text-white mt-32 w-full text-center">{error}</div>
      ) : (
        <div className="relative">
          <div className="absolute top-0 w-full h-52 header-gradient" />
          <div
            className="h-96 bg-no-repeat md:h-[70vh] w-full bg-cover bg-center"
            style={{
              backgroundImage: `url('${getImagePath(series?.series.img)}')`,
            }}
          />
          <div className="absolute bottom-0 w-full h-48 cover-gradient" />
          <div className="relative">
            <div className="absolute -top-[215px] left-0 right-0 py-10 lg:px-8 px-4">
              {/* summary section */}
              <SeriesSummary summary={series.series} />
              <hr className="h-[1px] border-gray-700 w-full my-4" />

              {/* Watched by section */}
              <WatchedBy />

              {/* Page tabs */}
              <Tab activeTab={activeTab} onChange={setActiveTab} />
              <hr className="h-[1px] border-gray-700 w-full" />

              {/* Tab panels */}
              {activeTab === TabEnum.CAST ? (
                <CastListing cast={series.characters} />
              ) : (
                <div className="bg-gray-900">
                  <div className="pt-12 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8">
                    <div className="lg:col-span-4">
                      <h2 className="text-2xl font-bold tracking-tight text-white">
                        Customer Reviews
                      </h2>
                      <ReviewStats reviews={reviews} />
                    </div>

                    <div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
                      <h3 className="sr-only">Recent reviews</h3>

                      <div className="flow-root">
                        <div className="-my-12 divide-y-[0.1px] divide-gray-500">
                          {reviews.featured.map((review) => (
                            <ReviewItem review={review} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default App;

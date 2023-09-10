import Image from "next/image";
import Button from "./_components/common/button";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center p-8 max-w-6xl mx-auto">
      <div className="md:grid md:grid-cols-5 grid-cols-1 gap-10 space-y-10 h-auto">
        <div className="md:col-span-3 space-y-4">
          <h1 className="text-6xl font-bold">Garden Genius</h1>
          <h2 className="text-3xl font-bold">
            Your personal gardening assistant, right in the palm of your hand!
          </h2>
          <div className="space-y-4">
            <p>
              Our mission is to help gardeners of all experience levels
              cultivate thriving green spaces by leveraging the power of
              publicly available data.
            </p>
            <p>
              Garden Genius offers tailored watering and planting
              recommendations based on live weather data and comprehensive
              information of over 4000 plant species and their growth patterns
              and ideal environmental conditions.
            </p>
          </div>
          <div className="flex flex-row space-x-4">
            <Button disabled={true}>Download (Coming Soon!)</Button>
            <Button>View Screenshots</Button>
          </div>
        </div>
        <div className="relative md:col-span-2 flex flex-col items-center">
          <Image
            className="rounded-lg border-black border-4 border-gray-900 overflow-hidden"
            src="/screenshot-home-screen.png"
            alt="Screenshot of home screen"
            height={1000}
            width={1000}
            style={{ height: "auto", width: "70%" }}
          />
        </div>
        <div className="md:col-span-2 relative w-full">
          <Image
            src="/about-illustration.png"
            alt="Male and female gardener planting pot plants"
            height={1000}
            width={1000}
            style={{ height: "auto", width: "100%" }}
          />
        </div>
        <div className="md:col-span-3 flex flex-col space-y-10">
          <h1 className="text-4xl font-bold">Features</h1>
          <div className="bg-gg-secondary p-8 rounded-lg w-full text-gg-secondary">
            <p>
              <b>Extensive Plant Database:</b> Access information on countless
              plant species, including growth habits, preffered climate and care
              requirements.
            </p>
            <p>
              <b>Personalised Recommendations:</b> Receive customised watering
              and planting suggestions based on your garden&apos;s specific
              conditions and your chosen plants.
            </p>
            <p>
              <b>Location-based Insights:</b> Harness the power of local climate
              data to optimise your garden&apos;s performance, adapting your
              approach according to seasonal changes.
            </p>
            <p>
              <b>Intuitive Interface:</b> Navigate through our user-friendly
              platform to quickly find the information you need to implement our
              expert advice.
            </p>
            <p>
              <b>Community Connection:</b> Join a network of fellow garden
              enthusiasts and exchange knowledge, tips and experiences through
              our integrated forum.
            </p>
          </div>
        </div>
        <div className="col-span-5 text-center flex flex-col space-y-4 items-center">
          <p className="text-3xl">Powered By</p>
          <div className="relative grid md:grid-cols-4 grid-cols-2 justify-center items-center p-8">
            <Image
              className="h-5 w-auto"
              height={1000}
              width={1000}
              src="https://kotlinlang.org/docs/images/kotlin-logo.png"
              alt="Kotlin logo"
            />
            <Image
              className="h-10 w-auto"
              height={1000}
              width={1000}
              src="https://upload.wikimedia.org/wikipedia/commons/3/38/SQLite370.svg"
              alt="Kotlin logo"
            />
            <Image
              className="h-10 w-auto"
              height={1000}
              width={1000}
              src="https://www.python.org/static/community_logos/python-logo-generic.svg"
              alt="Kotlin logo"
            />
            <Image
              className="h-10 w-auto"
              height={1000}
              width={1000}
              src="https://www.met.no/en/About-us/logo/_/image/943fbdc6-eba8-4e19-aff1-75f453ba9c7f:4bbfe4ae9e1826b3e159a3fff6e5d3893a93b072/width-768/Met_RGB_Horisontal_ENG.jpg"
              alt="MET logo"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

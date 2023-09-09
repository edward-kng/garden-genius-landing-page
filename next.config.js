/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kotlinlang.org",
        port: "",
        pathname: "/docs/images/kotlin-logo.png",
      },
      {
        protocol: "https",
        hostname: "www.met.no",
        port: "",
        pathname:
          "/en/About-us/logo/_/image/943fbdc6-eba8-4e19-aff1-75f453ba9c7f:4bbfe4ae9e1826b3e159a3fff6e5d3893a93b072/width-768/Met_RGB_Horisontal_ENG.jpg",
      },
      {
        protocol: "https",
        hostname: "www.python.org",
        port: "",
        pathname: "/static/community_logos/python-logo-generic.svg",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org/wikipedia/commons/3/38/SQLite370.svg",
        port: "",
        pathname: "/wikipedia/commons/3/38/SQLite370.svg",
      },
    ],
  },
};

module.exports = nextConfig;

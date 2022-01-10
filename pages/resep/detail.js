import Link from "next/link";

export default function Detail(props) {
  const { title, thumb, times, servings, dificulty, desc, ingredient, step } =
    props;

  return (
    <>
      <div className="container mx-auto mt-4 px-5 lg:px-24">
        <div className="breadcumb mb-5">
          <h4>
            <Link href="/">
              <a className="text-blue-700">Home</a>
            </Link>{" "}
            <span className="text-gray-500">/ {title}</span>
          </h4>
        </div>
        <h1 className="text-3xl font-semibold mb-3">{title}</h1>
        <img
          src={thumb}
          alt=""
          className="w-full lg:h-96 object-cover mb-5 border-0"
        />
        <div className="grid lg:grid-cols-3 lg:gap-4 lg:px-16 mb-4">
          <div className="border px-4 py-4 flex justify-between items-center mb-2">
            <div>
              <p className="font-semibold text-blue-700">Waktu Masak</p>
              <p className="font-medium text-gray-700">{times}</p>
            </div>
            <div className="rounded-lg px-3 py-3 bg-gray-200">
              <img
                src="/icon/alarm.svg"
                alt="icon chart"
                className="h-10 w-10"
              />
            </div>
          </div>
          <div className="border px-4 py-4 flex justify-between items-center mb-2">
            <div>
              <p className="font-semibold text-blue-700">Porsi</p>
              <p className="font-medium text-gray-700">{servings}</p>
            </div>
            <div className="rounded-lg px-3 py-3 bg-gray-200">
              <img
                src="/icon/restaurant.svg"
                alt="icon chart"
                className="h-10 w-10"
              />
            </div>
          </div>
          <div className="border px-4 py-4 flex justify-between items-center mb-2">
            <div>
              <p className="font-semibold text-blue-700">Tingkat Kesulitan</p>
              <p className="font-medium text-gray-700">{dificulty}</p>
            </div>
            <div className="rounded-lg px-3 py-3 bg-gray-200">
              <img
                src="/icon/chart.svg"
                alt="icon chart"
                className="h-10 w-10"
              />
            </div>
          </div>
        </div>
        <p className="mb-6 text-gray-800">{desc}</p>
        <div className="lg:grid lg:grid-cols-2 lg:gap-2">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-blue-700">Bahan</h2>
            <ol className="list-outside">
              {ingredient?.map((bahan) => {
                return (
                  <li className="text-gray-800" key={bahan}>
                    {bahan}
                  </li>
                );
              })}
            </ol>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-blue-700">Cara Masak</h2>
            <ul className="list-outside">
              {step?.map((langkah) => {
                return (
                  <li className="text-gray-800" key={langkah}>
                    {langkah}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

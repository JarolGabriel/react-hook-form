import { useState } from "react";
import { useForm } from "react-hook-form";
import clsx from "clsx";

export default function App() {
  const [item, setItem] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const addInput = (dataTodo) => {
    setItem([...item, dataTodo]);
    reset();
  };

  function onSubmit(data) {
    const cleanedGithubUsername = data.githubUsername.trim();
    const gitHubImg = `https://github.com/${cleanedGithubUsername}.png`;
    addInput({
      name: data.name,
      lastName: data.lastName,
      gitHubImg,
    });
  }
  return (
    <>
      <div className="flex flex-col w-screen">
        <span className="text-center bg-blue-600 font-semibold py-4 text-xl w-full ">
          Practica de react Hook Form
        </span>
      </div>
      <main className="flex gap-4 p-4">
        <section className="flex-none w-80 border border-blue-300/5 rounded-lg p-1">
          <div className="text-center bg-blue-600 font-semibold py-4 text-xl">
            Add your Date
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="w-80 px-4 pt-8">
            <div className=" flex flex-col gap-2">
              <input
                type="text"
                className="bg-[rgb(22,22,22)] border border-blue-300/5 rounded-lg p-1"
                placeholder="Name"
                {...register("name", {
                  required: {
                    value: true,
                    message: "No puedes agregar tareas en blanco",
                  },
                  minLength: {
                    value: 3,
                    message: "la tarea debe de tener almenos un caracter",
                  },
                })}
              />
              <input
                type="text"
                className="bg-[rgb(22,22,22)] border border-blue-300/5 rounded-lg p-1"
                placeholder="lastName"
                {...register("lastName", {
                  required: {
                    value: true,
                    message: "No puedes agregar tareas en blanco",
                  },
                  minLength: {
                    value: 3,
                    message: "la tarea debe de tener almenos un caracter",
                  },
                })}
              />
              <input
                type="text"
                className="bg-[rgb(22,22,22)] border border-blue-300/5 rounded-lg p-1"
                placeholder="gitHub user Name"
                {...register("githubUsername", { required: true })}
              />
              <button className="bg-blue-500/10 rounded-lg">submit</button>
            </div>
          </form>
        </section>

        <section className="flex-1">
          {item.map((item, index) => {
            return (
              <article
                key={index}
                className="p-2 border border-blue-300/5 flex items-center w-52 mb-3"
              >
                <img
                  src={item.gitHubImg}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-full mr-4"
                />
                <div className="flex flex-col">
                  <span className="font-semibold">{item.name}</span>
                  <span className="text-gray-600">{item.lastName}</span>
                </div>
              </article>
            );
          })}
        </section>
      </main>
    </>
  );
}

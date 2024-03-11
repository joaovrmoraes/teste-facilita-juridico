import { ControllerRenderProps } from "react-hook-form";

interface MapProps {
  field: ControllerRenderProps<
    {
      coordinates: { x: number; y: number };
      name: string;
      email: string;
      phone: string;
    },
    "coordinates"
  >;
}

export function Map({ field: { onChange, value } }: MapProps) {
  const tamanho = 10;
  const mapa = Array.from({ length: tamanho }, (_, i) =>
    Array.from({ length: tamanho }, (_, j) => ({ x: j, y: i })),
  );

  const handleClick = (coordenadas: { x: number; y: number }) => {
    onChange(coordenadas);
  };

  return (
    <div className="grid w-full grid-cols-10 gap-4 rounded-lg bg-neutral-700 p-2">
      {mapa.flat().map((coordenadas, index) => (
        <div
          key={index}
          className={`h-5 w-5 rounded-sm border border-black ${
            value.x === coordenadas.x && value.y === coordenadas.y
              ? "bg-blue-500"
              : coordenadas.x === 0 && coordenadas.y === 0
                ? "bg-red-500"
                : "bg-green-500"
          }`}
          onClick={
            coordenadas.x === 0 && coordenadas.y === 0
              ? undefined
              : () => handleClick(coordenadas)
          }
        />
      ))}
    </div>
  );
}

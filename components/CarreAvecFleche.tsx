type CarreAvecFlecheProps = {
  id: string;
};

export function CarreAvecFleche({ id }: CarreAvecFlecheProps) {
  return (
    <div
      id={id}
      className="h-18 w-18 bg-blue-500 m-5 flex items-center justify-center"
    >
      <svg
        viewBox="0 0 24 24"
        className="w-8 h-8 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </div>
  );
}

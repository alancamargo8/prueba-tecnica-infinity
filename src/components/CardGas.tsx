export default function CardGas({ item }: any) {
  return (
    <div className="flex items-center gap-14 py-3 border-b-2">
      <h3 className="font-medium">{item.title}</h3>
      <span>{item.attr_industrial}</span>
      <span>{item.id_contrato}</span>
      <span>{item.cumplimiento}</span>
      <button className="py-1 px-2 text-sm bg-green-100 text-green-500 rounded-md">
        {item.status}
      </button>
    </div>
  );
}

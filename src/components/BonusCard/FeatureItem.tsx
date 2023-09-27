interface iFeatureItem {
  title: string;
  value: string;
}
export const FeatureItem = ({ title, value }: iFeatureItem) => {
  return (
    <div className="flex items-center justify-between">
      <p>{title}</p>
      <p>{value}</p>
    </div>
  );
};

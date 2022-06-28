export default function PostItem({ post }: { post: any }) {
  return (
    <div className="shadow-lg p-2 border rounded-lg">
      <div className="pb-1">
        <div className="w-8 bg-red-300 rounded-full h-8"></div>
      </div>
      <h4 className="font-semibold text-xl text-slate-700">{post.title}</h4>
      <div className="w-full rounded-md overflow-hidden">
        <img
          className="w-full"
          src="https://gethelios.dev/wp-content/uploads/2022/06/Asset-15-1-2048x1134.png"
          alt="image"
        />
      </div>
    </div>
  );
}

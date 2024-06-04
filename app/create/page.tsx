export default function CreatePage() {
  return (
    <div className="my-16">
      <h1 className="text-4xl font-bold mb-8">Create a Thumbnail Test</h1>

      <p className="text-lg max-w-md mb-8">
        Create your test so that other people can vote on their favorite
        thumbnail and help you redesign or pickt he best options.
      </p>

      <div className="grid grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold">Test Image A</h2>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Test Image B</h2>
        </div>
      </div>
    </div>
  );
}

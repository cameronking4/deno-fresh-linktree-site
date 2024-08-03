import { ExternalLink } from "preact-feather";

const options: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

export default function FeedEntryComponent(
  props: {
    entry: {
      title: string;
      url: string;
    };
  },
) {
  const { entry } = props;

  return (
    <a
      href={entry.url}
      target="_blank"
      rel="noopener noreferrer"
      class="block"
    >
      <div class="relative bg-white hover:bg-gray-100 rounded-2xl px-4 py-4 shadow">
        <h2 class="text-lg font-bold text-gray-900 leading-snug mb-1 pr-5">
          {entry.title}
        </h2>
        <span class="block absolute top-0 right-0 p-3">
          <ExternalLink size={22} />
        </span>
      </div>
    </a>
  );
}

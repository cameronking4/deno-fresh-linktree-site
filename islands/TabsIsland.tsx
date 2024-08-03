import { useState } from "preact/hooks";

import LinkComponent from "../components/LinkComponent.tsx";
import FeedEntryComponent from "../components/FeedEntryComponent.tsx";

import { FileText, List } from "preact-feather";

const options: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

interface TabsProps {
  links: {
    url: string;
    title: string;
  }[];
  feed: {
    title: string;
    url: string;
  }[] | undefined;
}

export default function TabsIsland(props: TabsProps) {
  const [openTab, setOpenTab] = useState(1);

  const { links, feed } = props;

  console.log('Current Tab:', openTab);
  console.log('Links:', links);
  console.log('Feed:', feed);

  const handleTabClick = (tabIndex: number) => {
    console.log('Switching to tab:', tabIndex);
    setOpenTab(tabIndex);
  };

  return (
    <div class="flex flex-wrap w-full">
      <div class="w-full">
        <div class="relative mt-4 flex flex-col bg-white w-full">
          <div class="flex-auto">
            <div>
              <div class={`${openTab === 1 ? "block" : "hidden"}`}>
                <ul class="space-y-2">
                  {links.length === 0 && (
                    <div class="flex flex-col items-center space-y-1 py-8">
                      <List size={32} color="#9ca3af" />
                      <h2 class="text-sm font-bold text-gray-400 leading-tight mb-1">
                        No links yet.
                      </h2>
                    </div>
                  )}
                  {links.map((link) => (
                    <LinkComponent link={link} />
                  ))}
                </ul>
              </div>
              <div class={`${openTab === 2 ? "block" : "hidden"}`}>
                <ul class="space-y-2">
                  {feed && feed.length === 0 && (
                    <div class="flex flex-col items-center space-y-1 py-8">
                      <List size={32} color="#9ca3af" />
                      <h2 class="text-sm font-bold text-gray-400 leading-tight mb-1">
                        No links yet.
                      </h2>
                    </div>
                  )}
                  {feed && feed.map((entry) => (
                    <FeedEntryComponent entry={entry} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

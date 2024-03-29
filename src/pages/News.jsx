import BigBanner from "@/components/shared/BigBanner";
import SmallBanner from "@/components/shared/SmallBanner";
import SearchBar from "@/components/shared/SearchBar";
import SidebarFilter from "@/components/shared/SidebarFilter";
import NewsList from "@/components/customUI/NewsList";

export default function News() {
  return (
    <>
      {/* ads banner */}
      <div>
        <BigBanner />
      </div>

      {/* Search bar */}
      <div className="mt-4 flex justify-center mb-8">
        <SearchBar flag="news" />
      </div>

      <div className="flex md:flex-row md:items-start flex-col xl:gap-16 lg:gap-6 gap-4 justify-center items-center">
        {/* side bar */}
        <SidebarFilter />

        {/* product list */}
        <NewsList />

        {/* ads banner */}
        <div className="xl:w-1/6 min-w-36 lg:flex flex-col gap-6 md:hidden flex">
          <SmallBanner />
          <SmallBanner />
          <SmallBanner />
        </div>
      </div>
    </>
  );
}

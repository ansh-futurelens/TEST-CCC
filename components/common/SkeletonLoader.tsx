import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const HeroSectionSkeleton = () => {
  return (
    <div className="container-custom fixed inset-0 z-[9999] flex h-screen flex-col overflow-hidden bg-white">
      <SkeletonTheme baseColor="#e0e0e0" highlightColor="#f5f5f5">
        <div className="flex items-center justify-between py-6">
          <Skeleton height={100} width={100} borderRadius={8} />
          <div className="flex gap-6">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} height={20} width={100} borderRadius={6} />
            ))}
            <Skeleton height={40} width={120} borderRadius={10} />
          </div>
        </div>

        <div className="mt-10 flex flex-1 justify-between gap-10">
          <div className="flex min-w-[70%] flex-1 flex-col space-y-4">
            <Skeleton height={50} width="80%" />
            <Skeleton height={50} width="60%" />
            <Skeleton height={25} width="90%" />
            <Skeleton height={18} count={3} width="95%" />
            <Skeleton height={50} width={180} borderRadius={12} className="mt-10" />
          </div>

          <div className="hidden flex-1 md:block">
            <Skeleton height={500} borderRadius={20} />
          </div>
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default HeroSectionSkeleton;

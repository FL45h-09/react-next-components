import BannerScene from "@/_components/molecules/splineScene/BannerScene"

export const BannerSection = () => {
  return (
    <div className="bannersec relative">
        <div className="container">
            <div className="bannercaption pt-32 pb-64 relative z-[1] text-center w-[750px] border-box mx-auto">
                <h1 className="text-2xl font-bold mb-6">UIBrix - Reusable React & Next.js Components <span className="block">for Modern Web Apps</span></h1>
                <p>Build faster with plug-and-play UI components for React and Next.js. Copy. Paste. Ship. Contribute your own and power the open-source dev flow.</p>
            </div>
        </div>
        <div className="bannerscene absolute inset-0 w-full h-full overflow-hidden z-0"><BannerScene /></div>
    </div>
  )
}

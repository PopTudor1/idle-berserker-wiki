import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./homepage";
import ArenaPage from "./pages/guides/arena/arena-page";
import BerserkerEquipmentPage from "./pages/guides/berserker-equipment/berserker-equipment-page";
import BossesPage from "./pages/guides/bosses/bosses-page";
import CalculatorsPage from "./pages/guides/calculators/calculators-page";
import CompanionsPage from "./pages/guides/companions/companions-page";
import CostumesPage from "./pages/guides/costumes/costumes-page";
import CouponsPage from "./pages/guides/coupons/coupons-page";
import DemonPowersPage from "./pages/guides/demon-powers/demon-powers-page";
import DungeonsPage from "./pages/guides/dungeons/dungeons-page";
import EventsPage from "./pages/guides/events/events-page";
import FarmingPage from "./pages/guides/farming/farming-page";
import GameBuildsPage from "./pages/guides/game-builds/game-builds-page";
import GuildBattlePage from "./pages/guides/guild-battle/guild-battle-page";
import GuildPage from "./pages/guides/guild/guild-page";
import IntroductionPage from "./pages/guides/introduction/introduction-page";
import MonsterCardsPage from "./pages/guides/monster-cards/monster-cards-page";
import OtherInfoPage from "./pages/guides/other-info/other-info-page";
import ParagonPage from "./pages/guides/paragon/paragon-page";
import PetsPage from "./pages/guides/pets/pets-page";
import ResourceFarmingPage from "./pages/guides/resource-farming/resource-farming-page";
import SoulCrystalsPage from "./pages/guides/soul-crystals/soul-crystals-page";
import StageDropsPage from "./pages/guides/stage-drops/stage-drops-page";
import WorldStonesPage from "./pages/guides/world-stones/world-stones-page";
import ArchDevil from "./pages/player/arch-devil/arch-devil";
import BrolyBlack from "./pages/player/broly-black/broly-black";
import Charlie47 from "./pages/player/charlie-47/charlie-47";
import ContriteAnt from "./pages/player/contrite-ant/contrite-ant";
import Corgon from "./pages/player/corgon/corgon";
import Deathxrder from "./pages/player/deathxrder/deathxrder";
import Disguise from "./pages/player/disguise/disguise";
import Hanakilla from "./pages/player/hanakilla/hanakilla";
import Kale from "./pages/player/kale/kale";
import Luffy from "./pages/player/luffy/luffy";
import Luke from "./pages/player/luke/luke";
import Pc821 from "./pages/player/pc-821/pc-821";
import Pouloulou from "./pages/player/pouloulou/pouloulou";
import PureEnergy from "./pages/player/pure-energy/pure-energy";
import Traqaz from "./pages/player/traqaz/traqaz";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    children: [
      //guides
      {
        path: "introduction",
        element: <IntroductionPage />,
      },
      {
        path: "coupons",
        element: <CouponsPage />,
      },
      {
        path: "arena",
        element: <ArenaPage />,
      },
      {
        path: "berserker-equipment",
        element: <BerserkerEquipmentPage />,
      },
      {
        path: "bosses",
        element: <BossesPage />,
      },
      {
        path: "calculators",
        element: <CalculatorsPage />,
      },
      {
        path: "companions",
        element: <CompanionsPage />,
      },
      {
        path: "costumes",
        element: <CostumesPage />,
      },
      {
        path: "demon-powers",
        element: <DemonPowersPage />,
      },
      {
        path: "dungeons",
        element: <DungeonsPage />,
      },
      {
        path: "events",
        element: <EventsPage />,
      },
      {
        path: "farming",
        element: <FarmingPage />,
      },
      {
        path: "game-builds",
        element: <GameBuildsPage />,
      },
      {
        path: "guild",
        element: <GuildPage />,
      },
      {
        path: "guild-battle",
        element: <GuildBattlePage />,
      },
      {
        path: "monster-cards",
        element: <MonsterCardsPage />,
      },
      {
        path: "paragon",
        element: <ParagonPage />,
      },
      {
        path: "pets",
        element: <PetsPage />,
      },
      {
        path: "resource-farming",
        element: <ResourceFarmingPage />,
      },
      {
        path: "soul-crystals",
        element: <SoulCrystalsPage />,
      },
      {
        path: "stage-drops",
        element: <StageDropsPage />,
      },
      {
        path: "world-stones",
        element: <WorldStonesPage />,
      },
      {
        path: "other-info",
        element: <OtherInfoPage />,
      },
      //players
      {
        path: "traqaz",
        element: <Traqaz />,
      },
      {
        path: "luffy",
        element: <Luffy />,
      },
      {
        path: "kale",
        element: <Kale />,
      },
      {
        path: "broly-black",
        element: <BrolyBlack />,
      },
      {
        path: "pure-energy",
        element: <PureEnergy />,
      },
      {
        path: "contrite-ant",
        element: <ContriteAnt />,
      },
      {
        path: "deathxrder",
        element: <Deathxrder />,
      },
      {
        path: "disguise",
        element: <Disguise />,
      },
      {
        path: "charlie-47",
        element: <Charlie47 />,
      },
      {
        path: "pouloulou",
        element: <Pouloulou />,
      },
      {
        path: "pc-821",
        element: <Pc821 />,
      },
      {
        path: "arch-devil",
        element: <ArchDevil />,
      },
      {
        path: "luke",
        element: <Luke />,
      },
      {
        path: "corgon",
        element: <Corgon />,
      },
      {
        path: "hanakilla",
        element: <Hanakilla />,
      },

      // 🔁 Catch-all for unknown child routes under "/"
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}

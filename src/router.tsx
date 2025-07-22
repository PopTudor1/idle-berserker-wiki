import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./homepage";
import ArenaPage from "./pages/arena/arena-page";
import BerserkerEquipmentPage from "./pages/berserker-equipment/berserker-equipment-page";
import BossesPage from "./pages/bosses/bosses-page";
import CalculatorsPage from "./pages/calculators/calculators-page";
import CompanionsPage from "./pages/companions/companions-page";
import CostumesPage from "./pages/costumes/costumes-page";
import DemonPowersPage from "./pages/demon-powers/demon-powers-page";
import DungeonsPage from "./pages/dungeons/dungeons-page";
import EventsPage from "./pages/events/events-page";
import FarmingPage from "./pages/farming/farming-page";
import GameBuildsPage from "./pages/game-builds/game-builds-page";
import GuildBattlePage from "./pages/guild-battle/guild-battle-page";
import GuildPage from "./pages/guild/guild-page";
import IntroductionPage from "./pages/introduction/introduction-page";
import MonsterCardsPage from "./pages/monster-cards/monster-cards-page";
import ParagonPage from "./pages/paragon/paragon-page";
import PetsPage from "./pages/pets/pets-page";
import ResourceFarmingPage from "./pages/resource-farming/resource-farming-page";
import SoulCrystalsPage from "./pages/soul-crystals/soul-crystals-page";
import StageDropsPage from "./pages/stage-drops/stage-drops-page";
import WorldStonesPage from "./pages/world-stones/world-stones-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    children: [
      {
        path: "introduction",
        element: <IntroductionPage />,
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
      // 🔁 Catch-all for unknown child routes under "/"
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}

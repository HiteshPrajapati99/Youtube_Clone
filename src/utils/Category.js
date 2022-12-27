import WhatshotIcon from "@mui/icons-material/Whatshot";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import SettingsBackupRestoreIcon from "@mui/icons-material/SettingsBackupRestore";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import SportsIcon from "@mui/icons-material/Sports";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";

export const categories = [
  { name: "Home", icon: <HomeIcon /> },
  { name: "Trending", icon: <WhatshotIcon /> },
  { name: "Subscription", icon: <SubscriptionsIcon /> },
  { name: "Library", icon: <VideoLibraryIcon /> },
  { name: "History", icon: <HistoryIcon />, role: "SUBSCRIPTIONS" },
  { name: "Watch later", icon: <SettingsBackupRestoreIcon /> },
  { name: "Liked vides", icon: <ThumbUpOffAltIcon /> },
  { name: "Music", icon: <LibraryMusicIcon />, role: "SUBSCRIPTIONS" },
  { name: "News", icon: <NewspaperIcon />, role: "SUBSCRIPTIONS" },
  { name: "Sport", icon: <SportsIcon />, role: "SUBSCRIPTIONS" },
  { name: "Gaming", icon: <SportsEsportsIcon />, role: "SUBSCRIPTIONS" },
  { name: "Films", icon: <MovieCreationIcon />, role: "SUBSCRIPTIONS" },
];

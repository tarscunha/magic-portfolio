import { SiHtml5, SiCss3, SiVuedotjs, SiFirebase } from "react-icons/si";
import { IoMdGitMerge } from "react-icons/io";
import { VscVscode } from "react-icons/vsc";
import { FaTools, FaRegKeyboard } from "react-icons/fa";
import { TbBrandGithubCopilot } from "react-icons/tb";
import { MdOutlineScience, MdOutlineAccessibility, MdOutlineGroups, MdOutlineWork, MdOutlineAssignment } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { IconType } from "react-icons";

import {
  HiArrowUpRight,
  HiOutlineLink,
  HiArrowTopRightOnSquare,
  HiEnvelope,
  HiCalendarDays,
  HiArrowRight,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineDocument,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
  PiImageDuotone,
} from "react-icons/pi";

import {
  SiJavascript,
  SiNextdotjs,
  SiFigma,
  SiSupabase,
} from "react-icons/si";

import { FaAndroid } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiSketch, SiAdobecreativecloud } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { BiBarChartAlt2 } from "react-icons/bi";
import { GiSprint } from "react-icons/gi";



import { FaDiscord, FaGithub, FaLinkedin, FaX, FaThreads, FaXTwitter, FaFacebook, FaPinterest, FaWhatsapp, FaReddit, FaTelegram, } from "react-icons/fa6";

export const iconLibrary: Record<string, IconType> = {
  arrowUpRight: HiArrowUpRight,
  arrowRight: HiArrowRight,
  email: HiEnvelope,
  globe: HiOutlineGlobeAsiaAustralia,
  person: PiUserCircleDuotone,
  grid: PiGridFourDuotone,
  book: PiBookBookmarkDuotone,
  openLink: HiOutlineLink,
  calendar: HiCalendarDays,
  home: PiHouseDuotone,
  gallery: PiImageDuotone,
  discord: FaDiscord,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  github: FaGithub,
  linkedin: FaLinkedin,
  x: FaX,
  twitter: FaXTwitter,
  threads: FaThreads,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
  document: HiOutlineDocument,
  rocket: HiOutlineRocketLaunch,
  javascript: SiJavascript,
  nextjs: SiNextdotjs,
  supabase: SiSupabase,
  figma: SiFigma,
  sketch: SiSketch,
  adobe: SiAdobecreativecloud,
  "design-system": MdDesignServices,
  "data-viz": BiBarChartAlt2,
  sprint: GiSprint,
  "ab-test": MdOutlineScience,
  accessibility: MdOutlineAccessibility,
  clipboard: MdOutlineAssignment,
  "user-interview": FaRegUser,
  users: MdOutlineGroups,
  workshop: MdOutlineWork,
  html5: SiHtml5,
  css3: SiCss3,
  git: IoMdGitMerge,
  vscode: VscVscode,
  tools: FaTools,
  firebase: SiFirebase,
  copilot: TbBrandGithubCopilot,
  cursor: FaRegKeyboard,
  facebook: FaFacebook,
  pinterest: FaPinterest,
  whatsapp: FaWhatsapp,
  reddit: FaReddit,
  telegram: FaTelegram,
  android: FaAndroid,
  instagram: FaInstagram,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;

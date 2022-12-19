import { dom, library } from "@fortawesome/fontawesome-svg-core";
import {
  faTwitch,
  faMastodon,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

library.add(faTwitch, faMastodon, faTwitter);
dom.watch();

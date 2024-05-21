import { SectionOverride } from "@faststore/core";
import { ProfileChallenge_unstable as ProfileChallenge } from "@faststore/core/experimental";

import { HeroHeader, HeroImage } from "@faststore/ui";

const SECTION = "Hero" as const;

const override: SectionOverride = {
  section: SECTION,
  components: {
    HeroImage: {
      Component: (props) => (
        <ProfileChallenge>
          <HeroImage {...props} />
        </ProfileChallenge>
      ),
    },
  },
};

export { override };

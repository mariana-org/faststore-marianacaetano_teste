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
    HeroHeader: {
      Component: (props) => {
        return (
          <ProfileChallenge
            fallback={
              <HeroHeader
                title="🔒 Auth Hero"
                subtitle="You should be logged to see this content"
              />
            }
          >
            <HeroHeader {...props} />
          </ProfileChallenge>
        );
      },
    },
  },
};

export { override };
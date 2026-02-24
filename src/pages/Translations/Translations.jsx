import { useState } from "react";
import "./Translations.css";
import ScrollFadeIn from "../../components/ScrollFadeIn/ScrollFadeIn";
import PublicationCard from "../../components/PublicationCard/PublicationCard";
import Button from "../../components/Button/Button";
import FormModal from "../../components/FormModal/FormModal";

import theHamletOfTheBees from "../../assets/translation/hamletOfTheBees/theHamletOfTheBees.webp";
import lostProfile from "../../assets/lostProfiles.webp";
import parisByNight from "../../assets/parisByNight.webp";

function Translations() {
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);

  const purchaseFormFields = [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
      placeholder: "Your full name",
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      required: true,
      placeholder: "your.email@example.com",
    },
    {
      name: "message",
      label: "Message (Optional)",
      type: "textarea",
      required: false,
      placeholder: "Any additional questions or comments...",
      rows: 4,
    },
  ];

  return (
    <ScrollFadeIn selector=".translations__card--animated">
      <div className="translations">
        {/* <PageHeader
          title="Translation"
          description=""
          className="translations__header"
        /> */}

        <section className="translations__section">
          <div className="translations__grid">
            <PublicationCard
              coverImage={parisByNight}
              title="Paris by Night"
              publisher="Slacks Books"
              year="2023"
              description="Louis Aragon's 1923 Surrealist chamber piece. The work masquerades as a guide to the underbelly of Paris nightlife, but readers quickly find themselves in a surreal, phantasmagoric dream that unspools during the course of a night, starting with a walk along the Seine and finishing in a café at dawn, with shapeshifting, hallucinatory detours into literature, works of art, and religious history."
              customButton={
                <Button onClick={() => setIsPurchaseModalOpen(true)}>
                  Purchase
                </Button>
              }
              className="translations__card translations__card--animated"
            />

            <PublicationCard
              coverImage={lostProfile}
              title="Lost Profiles"
              publisher="City Lights"
              year="2016"
              description="A retrospective of a crucial period in modernism, written by the co-founder of the Surrealist Movement. Philippe Soupault profiles a gallery of contemporaries and heroes that he knew, including Proust, Joyce, Apollinaire, Cendrars, Reverdy, and others."
              quote={
                <>
                  <em>
                    "The chapter about Proust alone is worth the price of
                    admission, and then there is more, much more packed into the
                    pages of this small, indelible book." –Paul Auster
                  </em>
                  <br />
                  <br />
                  <em>
                    "Lost Profiles signals a necessary reminder of how much joy
                    there is to be found in discovering terrific, epochal texts
                    freshly translated." ––Patrick Dunagan, the Northwest Review
                    of Books
                  </em>
                </>
              }
              links={[
                {
                  url: "https://citylights.com/city-lights-published/lost-profiles-memoirs-of-cubism-dada/",
                  text: "Learn more and purchase",
                },
                {
                  url: "https://hyperallergic.com/362955/a-french-surrealists-eclectic-remembrances-of-his-cohort-finally-in-english/?fbclid=IwY2xjawJ7gztleHRuA2FlbQIxMQBicmlkETFxUDJtMlNteUtWMGs0NGpyAR7MJST6t4OjXsE97zymNGpEkc50FN7xT5Bd7szHIF_0giWfctqVy5LV3IL7vA_aem_qZhTq8iP5KIlV4x7potkKQ",
                  text: "Review",
                },
              ]}
              className="translations__card"
            />

            <PublicationCard
              coverImage={theHamletOfTheBees}
              title="The Hamlet of the Bees"
              publisher="Whale Cloth Press"
              year="1981"
              description="Valery Larbaud's nostalgic tribute to the tiny citizens that inhabit a small colony at his family home, and their fellowship to humankind."
              // TODO: [link to flappable page image pdfs]
              className="translations__card translations__card--animated"
            />
          </div>
        </section>

        <FormModal
          isOpen={isPurchaseModalOpen}
          onClose={() => setIsPurchaseModalOpen(false)}
          title="Purchase Paris by Night"
          fields={purchaseFormFields}
          submitLabel="Send Inquiry"
        />
      </div>
    </ScrollFadeIn>
  );
}

export default Translations;

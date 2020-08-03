<template>
  <q-page>
    <WavyHero
      :heroImgUrl="$t('Pages').IndexPage.Hero.BgImg.src"
      :heroHeader="'Privacy Policy'"
    />

    <div class="centerContent text-body1">
      <div class="pp-container">
        <p>
          We at We Bot AB care about you as a client and your integrity but we
          also want to be able to deliver the best service to you. To be able to
          do that, we need to know some more information about you. Here below
          you can read about what personal data we process, why we do it and
          whom we share it with. You can also see for how long we save them and
          what your rights are, as well as who to contact if you have any
          questions or want to exercise your rights.
        </p>

        <p class="list-title">
          We process the following personal data about you:
        </p>
        <ul>
          <li>
            Identity and contact information, including your name, e-mail
            address, address, telephone number;
          </li>
          <li>
            Business related information, including information provided in the
            course of the contractual or client relationship between you or your
            organisation and us, or otherwise voluntarily provided by you or
            your organisation
          </li>
          <li>
            Preferences in receiving information, including your name, e-mail
            address, address, telephone number and other personal data
            concerning your preferences relevant to our services.
          </li>
        </ul>

        <p class="list-title">
          We collect the personal data in the following circumstances:
        </p>
        <ul>
          <li>
            When you or your organisation provides, or offer to provide,
            products/services to us;
          </li>
          <li>
            When you correspond with us by e-mail or other electronical or
            physical means, by phone or directly face-to-face;
          </li>
          <li>
            When you or your organisation makes a request or otherwise interacts
            with our web page;
          </li>
          <li>When you sign up to receive other information from us;</li>
          <li>
            When making requests from your organisation or other organisations
            where you work, or from third party sources such as publicly
            available records.
          </li>
        </ul>

        <p class="list-title">
          We might use your personal data for the following purposes (exhaustive
          list):
        </p>
        <ul>
          <li>To maintain adequate records of you</li>
          <li>
            To deliver, administrate and communicate our services with you
          </li>
          <li>
            To administer and manage communication with you, including
            subscriptions to newsletters or other information services
          </li>
          <li>
            To provide you with information and offers related to our services
          </li>
        </ul>

        <p class="list-title">
          The above-mentioned purposes will be processed on one or more of the
          following legal grounds:
        </p>
        <ul>
          <li>
            Because it is necessary for us to do so to perform in accordance
            with a contract between you and us,
          </li>
          <li>Because it is necessary based on our legitimate interests</li>
          <li>
            Because it is necessary to comply with our legal obligations such as
            to keep records of our accounting or taxation purposes
          </li>
        </ul>

        <p>
          We will not sell your personal data to any third parties, but we will
          share them to parties that can help us in our business or with the
          purpose for which we process your personal data. That is for example
          our business partners. We also share your information to authorities
          for compliance purposes, if needed.
        </p>

        <p>
          To the largest extent, we will keep your personal data within the
          Internal Market, i.e. EEA. If your personal data is transferred to a
          third country, we have confirmed that the EU Commission has assessed
          that the third country has a so-called adequate level of protection,
          is a participant of the US EU Privacy Shield or we have signed an EU
          model clause with the receiving partner.
        </p>

        <p>
          We keep your personal data as long as it is necessary for the purpose
          for which it is processed. That is most often for as long as you are
          one of our clients but can also be 7 years according to tax and
          accounting regulation.
        </p>

        <p>
          We also use Google Analytics but only receive aggregated and thus
          anonymous information about what browser you use, how you found our
          website and what on our website that interests you. Please note that
          we cannot relate the information to you, we only use this information
          to improve our website experience.
        </p>

        <p class="list-title">
          You have the right to exercise rights regarding your personal data.
          You can read more about them here below. If you want to exercise any
          of them, please let us know.
        </p>
        <ul>
          <li>
            Right to access – You have the right to find out what kind of
            personal data we process and why as well as getting a copy of it.
          </li>
          <li>
            Right to rectification – If you think that your personal data is
            incorrect, such as name or address, you can ask us to correct the
            it.
          </li>
          <li>
            Right to restrict the processing activities – You can request that
            we restrict the processing of your personal data, if we for example
            have incorrect personal data and you do not want the processing to
            proceed until the it has been corrected.
          </li>
          <li>
            Right to erasure/right to be forgotten – You can request that we
            erase your personal data from the processing where it is based on
            consent or legitimate interest.
          </li>
          <li>
            Right to data portability – If the processing is based on consent or
            contract, you can ask to have your personal data sent to you in a
            machine-readable format so that it can be forwarded to another
            party.
          </li>
          <li>
            Right to object – For the processes that are based on legitimate
            interest, you have the right to object to the processing of your
            personal information. We will then weigh your integrity against our
            interest of processing your personal data and if your integrity
            weighs heavier, we will stop the processing.
          </li>
          <li>
            Right to withdraw your consent – if we base any of our processing on
            consent, you have the right to withdraw your consent at any time and
            we will stop the processing.
          </li>
          <li>
            Right to not be subject to profiling – You always have the right to
            ask to not be subject to profiling, i.e. that we stop drawing
            conclusions about you based on information from e.g. cookies.
          </li>
        </ul>

        <p>
          If you have any questions about how we process your personal data,
          please do not hesitate to contact us at
          <a href="mailto:hello@webot.se" target="_blank" rel="noopener"
            >hello@webot.se</a
          >
        </p>

        <p>
          Finally, if you think that we fail at processing your personal data in
          a secure way or fail to comply with your rights, please contact the
          Data Protection Authority. You can reach them at
          <a
						class="pp-mail-links"
            href="mailto:datainspektionen@datainspektionen.se"
            target="_blank"
            rel="noopener"
            >datainspektionen@datainspektionen.se</a
          >
        </p>

        <p>
          This privacy notice is valid from 2019-11-14
        </p>
      </div>
    </div>
  </q-page>
</template>

<script>
import WavyHero from "../components/WavyHero";

export default {
  name: "PrivacyPolicy",
  components: {
    WavyHero
  }
};
</script>

<style lang="scss" scoped>
.list-title {
  margin-bottom: 0;
}

.pp-container {
	width: 80%;
	margin: 0 auto;
	margin-bottom: 50px;

	ul {
		margin-top: 0;
	}

	a:link {
		color: initial;
		text-decoration: underline !important;
	}

	a:hover {
  color: $webotDarkBlue;
  }
  a:visited {
    color: initial;
  }
}
</style>

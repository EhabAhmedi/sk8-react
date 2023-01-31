import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Highlight from "./ui/Highlight";
import SkateboardingIcon from '@mui/icons-material/Skateboarding';

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose <span className="purple">SK8 HAVEN</span>
          </h2>
          <div className="highlight__wrapper">
            <Highlight
              icon={<SkateboardingIcon className="material-ui" />}
              title="Wide Range of designs "
              para="Sk8 Haven has a wide variety of boards for your own choosing."
            />
            <Highlight
              icon={<FontAwesomeIcon icon="book-open" />}
              title="Expert Staff, Personal Service"
              para="Expert Skateboarding Assistance from Dedicated and Passionate Staff."
            />
            <Highlight
              icon={<FontAwesomeIcon icon="tags" />}
              title="Affordable"
              para="Get your hands on high quailty boards for an affordable price ."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;

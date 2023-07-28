import React from "react";
import { Modal, List } from "@react95/core";
import { CdMusic } from "@react95/icons";

function Music({ closeMusic, isMobile }) {
  return (
    <Modal
      title={"Music"}
      closeModal={closeMusic}
      height="100%"
      icon={<CdMusic variant="32x32_4" />}
      menu={[
        {
          name: "Options",
          list: (
            <List>
              <List.Item onClick={closeMusic}>Close</List.Item>
            </List>
          ),
        },
      ]}
    >

    </Modal>
  );
}

export default Music;
const mailchimp = require("@mailchimp/mailchimp_transactional")(
  process.env.MAILCHIMP_KEY
);

import { NextApiRequest, NextApiResponse } from "next";
import { contactSchema } from "../../src/contact_schema";

const from_email = process.env.MAILCHIMP_FROM_EMAIL;
const to_email = process.env.MAILCHIMP_TO_EMAIL;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method != "POST") {
    return res.status(405).end();
  }

  try {
    contactSchema.validateSync(req.body);
  } catch (e) {
    return res.status(400).end();
  }

  return await mailchimp.messages
    .send({
      message: {
        from_email: from_email,
        subject: `${req.body.name} sent you a message from your website `,
        text: `Contacter Email: ${req.body.email}
         ${req.body.message}`,
        to: [
          {
            email: to_email,
            type: "to",
          },
        ],
      },
    })
    .then(() => res.status(200).end())
    .catch(() => res.status(500).end());
};

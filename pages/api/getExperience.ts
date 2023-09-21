import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Experience } from "../../typing";

const query = groq`
    *[_type == "experience"] {
      ...,
      technologies[]->
    }
`;
type Data = {
    experiences: Experience[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    let experiences: Experience[] = await sanityClient.fetch(query)
    experiences = experiences.sort((a:Experience,b:Experience) => (Number(new Date(b.dateStarted)) - Number(new Date(a.dateStarted))))
    res.status(200).json({ experiences })
  }
   
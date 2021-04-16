/**
 * This file is an interface for interacting
 * with the GitHub API and so on
 */

import axios from "axios";
import { baseLink } from "./constants";
import { linkBuilder } from "../utils/linkBuilder";

// For fetching some random repos
export const getRepos = async () => {
  const { data } = await axios.get(
    // Using the linkBuilder util to generate a GitHub API link
    linkBuilder()
  );
  // Returning the response
  return data;
};

/**
 * Used for fetching the README of the repository
 *
 * @param {String} repo
 * @param {String} owner
 * @returns {String}
 */
export const getRepoReadme = async (repo, owner) => {
  // Sending a request to the GitHub API and getting a response
  const { data } = await axios.get(`${baseLink}repos/${owner}/${repo}/readme`);
  // Decoding the base64 content that came as the readme content
  return Buffer.from(data.content, "base64").toString();
};

/**
 * Used for fetching languages that the repository uses
 *
 * @param {String} repo
 * @param {String} owner
 * @returns {Object}
 */
export const getRepoLangs = async (repo, owner) => {
  const { data } = await axios.get(
    `${baseLink}repos/${owner}/${repo}/languages`
  );
  return data;
};

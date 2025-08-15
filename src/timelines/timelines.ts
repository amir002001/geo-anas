import { displacementTimeline } from "./displacementTimeline/displacementTimeline";
import { healthcareTimeline } from "./healthcareTimeline/healthcareTimeline";

export interface IAnasEvent {}
export type Timeline = IAnasEvent[];

export const timelines: Timeline = [
  ...displacementTimeline,
  healthcareTimeline,
];

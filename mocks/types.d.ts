import type { DefaultBodyType, MockedRequest, RestHandler } from "msw";

export type RoutesType = RestHandler<MockedRequest<DefaultBodyType>>[];

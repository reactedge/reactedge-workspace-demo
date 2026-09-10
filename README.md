# ReactEdge Workspace Demo

This repository demonstrates how ReactEdge capabilities can be organised, versioned and deployed independently of the platform they enhance.

It represents a deployable ReactEdge workspace: the assets, contracts, manifests and server-rendered output required by a target storefront are assembled here without becoming part of the storefront application's source code.

## Purpose

ReactEdge is designed around a simple constraint: customer-facing capabilities should be able to evolve without requiring the underlying commerce platform to evolve at the same pace.

A ReactEdge deployment produces a workspace containing the capabilities required by a particular environment. That workspace can then be released independently of Magento, Next.js or another consuming application.

## Workspace structure

A workspace is organised by store or environment.

For example:

    default/
    ├── assets/
    ├── contracts/
    ├── manifests/
    └── ssr/

Each part has a distinct responsibility:

- **assets** — optimised medias assets
- **contracts** — configuration and integration contracts for capabilities
- **manifests** — metadata describing the deployed capabilities
- **ssr** — pre-generated server-rendered HTML

The consuming platform reads these artefacts rather than owning the implementation of each capability.

## Independent deployment

Changes to a ReactEdge capability can produce a new workspace release without requiring a release of the consuming platform.

A deployment therefore looks conceptually like:

    ReactEdge capability change
              ↓
       workspace generated
              ↓
       workspace released
              ↓
       consuming platform
              ↓
       capability activated

The host remains responsible for the application and its integration points. ReactEdge remains responsible for the independently evolving UI capability.

## Versioning and reversibility

Workspace deployments are versioned.

For example:

    reactedge-v0.0.5/
    reactedge-v0.0.6/
    reactedge-v0.0.7/

The active deployment is selected independently:

    reactedge -> reactedge-v0.0.7

Previous releases remain available. Reverting a deployment therefore does not require rebuilding the previous version; the active workspace can be switched back to an earlier release.

This makes reversibility a property of the deployment model rather than a recovery procedure.

## Status

This repository is a demonstration environment for the evolving ReactEdge deployment architecture.

It is intended to make the structure and lifecycle of a ReactEdge workspace visible and reproducible.
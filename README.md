# Typo 3 7.x

This is a no-frills example of a minimal repository to deploy a Typo3 7.x instance on Platform.sh

The example uses a `composer.json` and Typo3-specific `.platform.app.yaml` to build the application. This version also contains the full version of Typo3 7.3.1 in the repository. 

You can also download the repo from the (Typo3 repository)[https://git.typo3.org/Packages/TYPO3.CMS.git/shortlog/refs/heads/master] 

The `.platform.app.yaml` varies from the standard file only in terms of the mount points defined: 

```
# The mounts that will be performed when the package is deployed.
mounts:
    "/public/typo3conf": "shared:files/typo3conf"
    "/public/typo3temp": "shared:files/typo3temp"
    "/public/uploads": "shared:files/uploads"
    "/public/fileadmin": "shared:files/fileadmin"
```


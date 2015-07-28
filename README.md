# Typo 3 7.x

This is a no-frills example of a minimal repository to deploy a Typo3 7.x instance on Platform.sh

The example uses a `composer.json` and Typo3-specific `.platform.app.yaml` to build the application. This version also contains the full version of Typo3 7.3.1 in the repository. Either you can clone this repo and add it to the repository directory of your Platform.sh project or you can download the repo from the Typo3 repository at: https://git.typo3.org/Packages/TYPO3.CMS.git.

The `.platform.app.yaml` varies from the standard file only in terms of the mount points defined: 

```
# The mounts that will be performed when the package is deployed.
mounts:
    "/public/typo3conf": "shared:files/typo3conf"
    "/public/typo3temp": "shared:files/typo3temp"
    "/public/uploads": "shared:files/uploads"
    "/public/fileadmin": "shared:files/fileadmin"
```
Once you have the Typo3 code in your repository, run `git add .`, `git commit -m "[your commit message]` and then `git push` it to the Platform.sh repo. This will then build the application using PHP 5.5. Once it has build, go to the Typo3 backend at: `master-<project_id>.<cluster>.platform.sh/typo3/index.php`. You should then get the following message: 

	
> **The Install Tool is locked**
>
> For security reasons the Install Tool is locked by default.
> To enable the Install Tool, the file ENABLE_INSTALL_TOOL must be created in the directory typo3conf/.
> Just click the button below, the file will be created for you and the Install Tool will be unlocked.
> Security note: When you are finished with your work, please log out of the Install Tool. Otherwise TYPO3 will automatically lock the Install Tool after one hour.

You can create this file as follows by invoking the `platform ssh` command:

```
$ platform ssh
$ touch public/typo3conf/ENABLE_INSTALL_TOOL
$ logout
```
Go back to your Typo3 backend at `master-<project_id>.<cluster>.platform.sh/typo3/index.php` and you will be able to run the setup wizard.  

# Corruption Watch

## Branches

- main - stable, production-ready code.
- develop - Active development branch

## Feature Development

- Each new piece of work is done on separate branch
- feature/short-description

## Bug fixes

- bugfix/short-description

## Pull Requests

- Create your feature/your-branch-name
- Commit
- git push -u origin feature/your_branch
- Create PR into develop or main

## How to contribute

- Ensure you are added as Collobarators & Teams in Github & you will receive an invitation link & accepted
- git clone git@github.com:nirozjung/korruption-watch.git
- Set username & email
  - git config user.name "your-name"
  - git config user.email "your-email@example.com"
- Create feature branch & commit
- git push -u origin feature/your_branch
- Github -> Open a Pull Request
- PR should target main]

## SSH setup

- Generate ssh keys locally for github

  - ssh-keygen -t ed25519 -C "your_personal_email" -f ~/.ssh/id_ed25519_github
  - This create following

  ```
    ~/.ssh/id_ed25519_github
    ~/.ssh/id_ed25519_github.pub

  ```

  - Add ssh key to your ssh agent

  ```
    eval "$(ssh-agent -s)"
    ssh-add ~/.ssh/id_ed25519_github
  ```

  - Add public key to your Github

  ```
    cat ~/.ssh/id_ed25519_github.pub
  ```

  - Copy this and add it in Github Settings --> SSH and GPH keys --> "New SSH key"

- Inside .ssh folder, create config file and add as below

  ```
    # -----------------------------
    # Work Account (Azure Repo default)
    # -----------------------------
    Host dev.azure.com
        HostName dev.azure.com  # or your work git domain
        User git
        IdentityFile ~/.ssh/id_rsa
        IdentitiesOnly yes

    # -----------------------------
    # Personal GitHub Account
    # -----------------------------
    Host github.com
        HostName github.com
        User git
        IdentityFile ~/.ssh/id_ed25519_github
        IdentitiesOnly yes

  ```

- Override git identity for personal repo

  - cd korruption-watch
  - git config user.name 'your_name'
  - git config user.email 'your_email'

- Verify
  - git config --show-origin --list | grep user

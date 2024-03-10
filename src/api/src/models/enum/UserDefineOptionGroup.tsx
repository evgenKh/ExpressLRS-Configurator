import { registerEnumType } from 'type-graphql';

enum UserDefineOptionGroup {
  RegulatoryDomain433 = 'REGULATORY_DOMAIN_433',
  RegulatoryDomain900 = 'REGULATORY_DOMAIN_900',
  RegulatoryDomain2400 = 'REGULATORY_DOMAIN_2400',
}

registerEnumType(UserDefineOptionGroup, {
  name: 'UserDefineOptionGroup',
});

export default UserDefineOptionGroup;
